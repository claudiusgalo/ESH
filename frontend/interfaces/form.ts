export interface ContactForm {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
    phoneNumber: string,
    handlePhoneNumberChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}