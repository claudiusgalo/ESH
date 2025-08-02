export type Visibility = 'visible' | 'hidden';

export interface NavBar {
    color: string,
    handleScroll: () => void,
    border: string,
    smallBarOpen: boolean,
    toggleBar: () => void,
    displayBar: Visibility,
}