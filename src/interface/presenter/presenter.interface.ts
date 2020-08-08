export interface IPresenter {
    initialize(): void;
    toFormat(): void;
    toFormatWithoutBr(): void;
    toCheckRule(): void;
    getTypes(): Array<string>;
}