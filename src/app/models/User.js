class User {
    constructor(id, name, surname) {
        this.id = id;
        this.name = name;
        this.surname = surname;
    }

    static fromJson(json) {
        return new User(json.id, json.name, json.surname);
    }
}

export default User;
