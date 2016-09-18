export class User {

    private _id: number;

    private _name: string;

    constructor(id: number) {
        this._id = id;
    }

	public get id(): number {
		return this._id;
	}

	public get name(): string {
		return this._name;
	}

	public set name(value: string) {
		this._name = value;
	}

}