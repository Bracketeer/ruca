export interface IMenuList {
    icon?: string,
    text: string,
    active: boolean,
    link: string,
    subMenu?: Array<IMenuList>
}