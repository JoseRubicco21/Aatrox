'use-strict';

class User extends Model {
	constructor(id, name, password) {
		this.id = id;
		(this.name = name), (this.password = password);
	}
}
