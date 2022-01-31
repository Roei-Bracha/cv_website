
export const config:Config = {
    TypedTitles : [
        "Full Stack Developer 💻",
        "Flutter Developer 📱",
        "React / React Native Developer 🌐",
        "Node.js Developer 🖥",
        "Python Developer 🐍",
    ],
    aboutMe: [
        {title:"this is a title", text:"this is a content another lin"},
    ]
}

export interface Config {
    TypedTitles: string[]
    aboutMe: AboutMeParagraph[]
}

export interface AboutMeParagraph {
    title?: string
    text?: string
    bullets?: string[]
}