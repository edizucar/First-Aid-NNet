class NeuralNetwork {
	constructor(inputs, hiddenLayers, outputs) {
		/* 	inputs is a number describing how many inputs the neural network has.
		
			hiddenLayers is an array where the length is how many hidden layers there are,
			Each integer in the array represents how many nodes there are in that hidden layer.
			
			outputs is the number of outputs the neural network has.
			
			This is a fully connected neural network structure.
		*/
		this.inputCount = inputs;
		
		this.hiddenLayerCount = [];
		for (var i=0; i < hiddenLayers.length; i++) {
			this.hiddenLayerCount.push(hiddenLayers[i]);
		}
		
		this.outputCount = outputs;
		
		this.weightsAndBiases = [];

		this.weightsAndBiases.push(new Matrix(this.hiddenLayerCount[0],this.inputCount));
		
		for (var i = 1; i < this.hiddenLayerCount.length - 2; i++){
			this.weightsAndBiases.push(new Matrix(this.hiddenLayerCount[i+1], this.hiddenLayerCount[i]));

		}

		this.weightsAndBiases.push(new Matrix(this.outputCount, this.hiddenLayerCount[this.hiddenLayerCount.length - 1]));	
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

	feedForward(inputs,layer = 0) {
		//inputs -> a Matrix of the inputs
		// This is a recursive method -> user should call with no argument for layer parameter.

		if (layer != this.weightsAndBiases - 1) {
			let result = this.weightsAndBiases[layer].dotProduct(inputs);
			return this.feedForward(result, layer + 1);
		}
		else {
			return inputs.getMatClone();
		}
	}
	
}
