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
		for (int i=0;i<hiddenLayers.length;i++) {
			this.hiddenLayerCount.push(hiddenLayers[i]);
		}
		
		this.outputCount = outputs;
		
		
		
		
		
		
	}	
	
}
