# AI-Powered Document Editor

## 📌 Overview
This project is an **AI-Powered Document Editor** that allows users to create, modify, and enhance legal documents using **GPT-4**. The editor features **drag-and-drop** functionality similar to **PandaDoc**, enabling intuitive section reordering. The system is designed for seamless AI-powered content enhancement and is built with **React, React DnD, and OpenAI's GPT-4 API**.

## 🚀 Features
- 📝 **Drag-and-Drop Document Sections** (Rearrange sections intuitively)
- 🤖 **AI-Powered Content Enhancement** (GPT-4 integration for better content)
- ✂ **Delete Sections** (Remove sections easily)
- 🔄 **Modular Document Structure** (Designed for extensibility)
- 🔒 **Scalable & Secure** (Supports cloud deployment)

## 📁 Folder Structure
```
/ai-document-editor
│── /src
│   ├── /components
│   │   ├── DraggableSection.js    # Handles drag-and-drop sections
│   │   ├── SectionList.js         # Manages document sections
│   ├── /utils
│   │   ├── aiService.js           # Handles OpenAI GPT-4 API calls
│   │   ├── dndHelpers.js          # Drag-and-Drop constants
│   ├── /context
│   │   ├── DocumentContext.js     # Global document state (optional)
│   ├── App.js                     # Root component
│   ├── index.js                   # Main entry point
│── .env                            # API key configuration
│── package.json                    # Dependencies
│── README.md                       # Documentation
```

## 🛠️ Installation & Setup
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-repo/ai-document-editor.git
cd ai-document-editor
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Set Up OpenAI API Key**
1. Get an API Key from [OpenAI](https://platform.openai.com/signup)
2. Create a `.env` file in the project root and add:
   ```sh
   REACT_APP_OPENAI_API_KEY=your_openai_api_key_here
   ```
3. Restart the server after updating `.env`

### **4️⃣ Run the Project**
```sh
npm start
```
The app will be available at: **http://localhost:3000/**

## 🎮 Usage Guide
1. **Drag** and **drop** sections to rearrange them.
2. Click **"Enhance with AI"** to refine content using **GPT-4**.
3. Click **"Delete"** to remove unwanted sections.
4. The AI-enhanced content replaces the existing section.

## 🛑 Troubleshooting
| Issue | Cause | Fix |
|-------|-------|-----|
| `react-dnd` not working | Missing dependencies | Run `npm install react-dnd react-dnd-html5-backend` |
| AI Enhancement not working | API key missing | Check `.env` and restart the server |
| Buttons not responding | Event handlers not set properly | Check `onClick` functions in `DraggableSection.js` |

## 📌 Future Enhancements
- 🖋️ **Rich Text Editing** (Bold, Italics, Lists)
- 📄 **Export to PDF & DOCX**
- 🌎 **Multi-language Support**
- ☁ **Cloud Storage Integration**

## 🤝 Contributing
We welcome contributions! To contribute:
1. Fork the repository
2. Create a new branch (`feature-new-functionality`)
3. Commit changes (`git commit -m "Added feature"`)
4. Push to the branch and create a PR

## 📝 License
This project is licensed under **MIT License**.

---

🎉 **Enjoying using the AI-Powered Document Editor!** 🚀

