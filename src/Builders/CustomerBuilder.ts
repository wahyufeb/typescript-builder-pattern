import CustomerDTO from "../DataTransferObject/CustomerDTO";

class CustomerBuilder {
    private _id: number = 0;
    private _firstName: string = "";
    private _lastName: string = "";
    private _email: string = "";
    private _address: string = "";
    private _hobby: string = ""
    private _age: number = 0;


    setId(value: number) :CustomerBuilder {
        this._id = value;
        return this
    }

    setFirstName(value: string) :CustomerBuilder {
        this._firstName = value;
        return this;
    }

    setLastName(value: string) :CustomerBuilder {
        this._lastName = value;
        return this;
    }

    setEmail(value: string) :CustomerBuilder {
        this._email = value;
        return this;
    }

    setAddress(value: string) :CustomerBuilder {
        this._address = value;
        return this;
    }

    setHobby(value: string) :CustomerBuilder {
        this._hobby = value;
        return this
    }

    setAge(value: number) :CustomerBuilder {
        this._age = value;
        return this;
    }

    public build() :CustomerDTO {
        return new CustomerDTO(
            this._id,
            this._firstName,
            this._lastName,
            this._email,
            this._address,
            this._hobby,
            this._age,
        );
    }
}

export default CustomerBuilder;