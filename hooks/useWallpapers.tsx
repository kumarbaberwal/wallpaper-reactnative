export interface Wallpaper {
    uri: string;
    name: string;
}

export interface FullWallpaper extends Wallpaper {
    liked: boolean;
    suggested: boolean;
    library: boolean;
}

export function useSuggestedWallpapers(): FullWallpaper[] {
    const wallpapers = useWallpapers();
    return wallpapers.filter(wallpaper => wallpaper.suggested);
}

export function useLibraryWallpapers(): FullWallpaper[] {
    const wallpapers = useWallpapers();
    return wallpapers.filter(wallpaper => wallpaper.library);
}

export function useLikedWallpapers(): FullWallpaper[] {
    const wallpapers = useWallpapers();
    return wallpapers.filter(wallpaper => wallpaper.liked);
}

export function useWallpapers(): FullWallpaper[] {
    return [
        {
            uri: "https://ideogram.ai/assets/progressive-image/balanced/response/-54C2AY5TOSLOSDFgzCrfg",
            name: "Heritage",
            liked: true,
            suggested: true,
            library: false,
        },
        {
            uri: "https://ideogram.ai/assets/progressive-image/balanced/response/AOwNiHulQ3WADOay_9Wl7g",
            name: "Paintings",
            liked: false,
            suggested: true,
            library: true,
        },
        {
            uri: "https://ideogram.ai/assets/progressive-image/balanced/response/35kzkNocQ3qv18bxwI5pSg",
            name: "BelaCio",
            liked: true,
            suggested: false,
            library: true,
        },

        {
            uri: "https://ideogram.ai/assets/progressive-image/balanced/response/WT0wLIzUT9GQUZZTrl932g",
            name: "Girl",
            liked: true,
            suggested: false,
            library: false,
        },

        {
            uri: "https://ideogram.ai/assets/progressive-image/balanced/response/ypi478X3SQGlrxUblU4uMw",
            name: "Dog",
            liked: false,
            suggested: true,
            library: true,
        },
        {
            uri: "https://ideogram.ai/assets/progressive-image/balanced/response/S6dPIe1RQKK1m9PfsYT5vA",
            name: "Dinasour",
            liked: true,
            suggested: false,
            library: false,
        },
        {
            uri: "https://ideogram.ai/assets/progressive-image/balanced/response/B_Xk7Qn0QE2vxnknT03jUA",
            name: "Boat in Water",
            liked: true,
            suggested: false,
            library: true,
        },
        {
            uri: "https://ideogram.ai/assets/progressive-image/balanced/response/AfcJBp7jRK2goFGhMEaIaw",
            name: "Beautiful Anime",
            liked: false,
            suggested: true,
            library: true,
        },
    ]
}