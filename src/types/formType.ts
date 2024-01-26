export type TForm = {
    headline: string,
    inputName: boolean,
    inputPass: boolean,
    btnAction: string,
    passForget?: boolean,
    linkAction?: boolean
}

export type TEdit = {
    userName?: string,
    userEmail?: string,
    resetInput?: boolean
}