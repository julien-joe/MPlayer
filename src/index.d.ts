interface IOptions {
    index?: number;
    fftSize?: number;
    volume?: number;
    cacheCount?: number;
    baseUrl?: string;
    request?: (options: IOptions) => ArrayBuffer;
    playMode?: PlayMode;
}
declare type PlayMode = 'loop' | 'rand' | 'single';
declare type EventType = 'load' | 'ended' | 'catch';
declare type EventHandle = () => void;
export default class MPlayer {
    private options;
    private playingState;
    private decodedData;
    private analyser;
    private urlList;
    private duration;
    private handle;
    private delta;
    private firstPlay;
    private ctx;
    private gain;
    private source;
    private cache;
    onload: EventHandle;
    onended: EventHandle;
    oncatch: () => void;
    private errorUrl;
    constructor(resource: string | string[], options?: IOptions);
    private initParams;
    private initSource;
    private initRequest;
    private request;
    private pushCache;
    private initDecode;
    private bindLoad;
    private bindEnded;
    private initAnalyser;
    private initBufferSource;
    on(type: EventType, fn: () => void): void;
    off(type: EventType, fn: () => void): void;
    private emit;
    playPrev(): void;
    playNext(): void;
    setUrlList(list: string[]): void;
    setOptions(options: IOptions): void;
    play(): void;
    reset(): void;
    start(offset: number): void;
    getData(): Uint8Array;
    getCurrentTime(): number;
    pause(): void;
    toggle(): void;
    setPlayMode(playMode: PlayMode): void;
    setVolume(val?: number): void;
}
export {};
