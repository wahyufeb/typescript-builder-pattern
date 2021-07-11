class CustomerDTO {
    private _id: number;
    private _firstName: string;
    private _lastName: string;
    private _email: string;
    private _address: string;
    private _hobby: string;
    private _age: number;

    constructor(
        id: number,
        firstName: string,
        lastName: string,
        email: string,
        address: string,
        hobby: string,
        age: number,
    ) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._address = address;
        this._hobby = hobby;
        this._age = age;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }
}

export default CustomerDTO;