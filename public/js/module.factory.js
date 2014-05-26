var Factory = function(Schema,mongoose) {

	this.Schema = Schema;
	this.mongoose = mongoose;
	this.Item = null;

	this.createSchemas = function() {

		ProductSchema = new this.Schema({
			name: String,
			price: Number, 
			description: Description

		});

		this.Product = mongoose.model('Product',ProductSchema);
	}

	this.insertProduct = function() {

		var fireball = new this.Product({
			name: 'fireball',
			price: 2000,
			description: 'Lorem ipsum dolor sit amet, consectetur 
			adipisicing elit. Quis, id minima laboriosam 
			iure deleniti natus animi ipsam numquam officiis 
			optio mollitia vitae dolorum odit sapiente in unde 
			doloremque nam qui'

		}); 

		var rollupgrass = new this.Product({
			name: 'rollupgrass',
			price: 5000,
			description: 'Lorem ipsum dolor sit amet, consectetur 
			adipisicing elit. Quis, id minima laboriosam 
			iure deleniti natus animi ipsam numquam officiis 
			optio mollitia vitae dolorum odit sapiente in unde 
			doloremque nam qui'

		}); 

		fireball.save();
		rollupgrass.save();
	}

	this.getPerson = function(query,res) {

		this.Person.find(query,function(error,output) {
			res.json(output);
		});
	}
}

module.exports = Factory;