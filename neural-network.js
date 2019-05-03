class NeuralNetwork {
	constructor(inputs, hiddenLayers, outputs) {
		/* 	inputs is a number describing how many inputs the neural network has.
		
			hiddenLayers is an array where the length is how many hidden layers there are,
			Each integer in the array represents how many nodes there are in that hidden layer.
			
			outputs is the number of outputs the neural network has.
			
			This is a fully connected neural network structure.
		*/
		this.weightCounts = [];
		this.weightCounts.push(inputs);

		for (var i=0; i < hiddenLayers.length; i++) {
			this.weightCounts.push(hiddenLayers[i]);
		}
		
		this.weightCounts.push(outputs);
		
		this.weightsAndBiases = [];
		for (var i = 1; i < this.weightCounts.length - 1; i++) {
			this.weightsAndBiases.push(new Matrix(this.weightCounts[i], this.weights[i-1]));
		}



		

	}
	
	display() {
		for (var i = 0; i < this.weightsAndBiases.length; i++) {
			this.weightsAndBiases[i].display();
		}
	}

	randomize(x1=1, x2=10){
		for (var i = 0; i < this.weightsAndBiases.length; i++) {
			this.weightsAndBiases[i].randomize(x1,x2);
		}		
	}

}
