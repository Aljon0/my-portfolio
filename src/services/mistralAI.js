const API_URL = "https://api.mistral.ai/v1/chat/completions";
const MISTRAL_API_KEY = import.meta.env.VITE_MISTRAL_API_KEY;
// Al-Jon's information for context
const AL_JON_INFO = `
Al-Jon is a developer with skills in React, Node.js, Express, and has security experience 
including Authentication Systems. He's worked on projects including 
an E-Commerce Platform, Security Dashboard, Portfolio Website, and Task Management App.
He's based in General Trias, Cavite, Philippines and can be contacted at aljon.media0@gmail.com
or by phone at +63 906 920 8512.

Recent Projects:
- "Eternal Design": A 3D customization platform for gravestones that allows users to visualize designs in 3D, 
customize their own or select from templates, place orders, and communicate with the business owner. 
Al-Jon built this full system using React.js, Three.js, Tailwind CSS, and Firebase for authentication, 
database, and real-time features. He worked as the full-stack developer managing both frontend and backend, 
despite it being his first time using both React.js and Three.js simultaneously.

Tech Stack Preferences:
Al-Jon is most comfortable with React.js and Tailwind CSS on the frontend, and Express.js with Firebase 
on the backend. His favorite stack is FERN — Firebase, Express, React, and Node. He's especially fond of 
Firebase because it's a NoSQL database that's secure, scalable, and developer-friendly. He also works with 
Supabase, and Appwrite. While capable of full-stack development, he leans more toward backend 
development, enjoying the creation of secure, fast, and scalable APIs.

Development Approach:
Al-Jon identifies more as a backend developer because he enjoys working with logic, structure, and 
functionality. He can handle frontend work but typically needs a reference or wireframe for UI design. 
He's fully capable of full-stack work but thrives more on the backend side.

Handling Pressure and Deadlines:
When under pressure, Al-Jon breaks tasks into smaller parts with mini-deadlines, prioritizing the most 
important features first. He stays focused by avoiding distractions and adjusting his schedule when 
necessary. He values transparent communication with team members or supervisors about challenges. 
During his 3D gravestone project, he successfully met deadlines despite learning new technologies by 
setting daily goals and maintaining consistency.

Additional Skills and Experience:
- Proficient in building secure authentication systems
- Skilled in analyzing and solving problems
- Skilled in developing e-commerce platforms
- Capable of creating responsive and user-friendly interfaces
- Strong problem-solving abilities and adaptability to new technologies
`;

export const getMistralResponse = async (userMessage, conversationHistory) => {
  try {
    // Prepare the system message with Al-Jon's information
    const systemMessage = {
      role: "system",
      content: `You are Al-Jon's virtual assistant. Respond to questions about Al-Jon based on this information: ${AL_JON_INFO}. 
      Be helpful, friendly, and conversational. If you don't know something specific about Al-Jon that wasn't mentioned in the information, 
      you can be creative but make it consistent with what you know about him. For general questions not related to Al-Jon, 
      answer helpfully but briefly. Always be professional and represent Al-Jon in a positive light. Only Answer based on the information provided if the question does not relate to the information say "I don't know" Don't answer anything else that is not related to Al-jon information.`,
    };

    // Format conversation history for the API
    const messages = [
      systemMessage,
      ...conversationHistory.map((msg) => ({
        role: msg.sender === "user" ? "user" : "assistant",
        content: msg.text,
      })),
      { role: "user", content: userMessage },
    ];

    // Call Mistral AI API
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${MISTRAL_API_KEY}`,
      },
      body: JSON.stringify({
        model: "mistral-small-latest",
        messages: messages,
        temperature: 0.7,
        max_tokens: 800,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error?.message || "Failed to get response from Mistral AI"
      );
    }

    return data.choices[0].message.content;
  } catch (error) {
    console.error("Error calling Mistral AI:", error);
    throw error;
  }
};
