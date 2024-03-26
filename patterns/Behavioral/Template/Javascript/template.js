/**
 * The concept was referred from https://refactoring.guru/
design-patterns/template-method
 * This example simply demonstrates how to implement the
 * Template Design Pattern in a scenario: imagine you are
 * standing in front of a kiosk machine at McDonald's to
 * register, and you will receive a card in return.
 */

class CommunicateWithDevice {
	constructor() {}
	on() {
		throw new Error("Subclasses must override the `on` method");
	}
	off() {
		throw new Error("Subclasses must override the `off` method");
	}
	process() {
		throw new Error("Subclasses must override the `process` method");
	}
}

class CardDispenser extends CommunicateWithDevice {
	on() {
		console.log("card dispenser on");
	}
	off() {
		console.log("card dispenser off");
	}
	process() {
		this.checkRemainCardQuantity();
		this.writeByteToCard();
		this.dispenseCard();
	}
	checkRemainCardQuantity() {
		console.log("check quantity....");
	}
	writeByteToCard() {
		console.log("writing....");
	}
	dispenseCard() {
		console.log("dispensing...");
	}
}

class BillAcceptor extends CommunicateWithDevice {
	on() {
		console.log("bill acceptor on");
	}
	off() {
		console.log("card acceptor off");
	}
	process() {
		this.collectBills();
		this.countBills();
	}
	collectBills() {
		console.log("Collecting bills...");
	}
	countBills() {
		console.log("Counting bills...");
	}
}
class MembershipCardCreator {
	#cardDispenser = null;
	#billAcceptor = null;

	constructor(cardDispenser, billAcceptor) {
		this.#cardDispenser = cardDispenser;
		this.#billAcceptor = billAcceptor;
	}

	initialize() {
		this.#billAcceptor.on();
		this.#cardDispenser.on();
	}
	getPhysicalCard() {
		this.#billAcceptor.process();
		this.#billAcceptor.off();

		this.#cardDispenser.process();
		this.#cardDispenser.off();
	}
}

const cardDispenser = new CardDispenser();
const billAcceptor = new BillAcceptor();
const membershipCard = new MembershipCardCreator(cardDispenser, billAcceptor);

membershipCard.initialize();
membershipCard.getPhysicalCard();
