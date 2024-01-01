# Lottery Dapp

![Splash Screen](https://res.cloudinary.com/do3tlu1ph/image/upload/v1704122884/vtodbepmxqd5sg5ap431.png)

![enter image description here](https://res.cloudinary.com/do3tlu1ph/image/upload/v1704122885/sitgc5zen6oajdwv7kog.png)
This project is a decentralized application (dapp) for a lottery system built on the Polygon (Matic) blockchain. The dapp allows users to participate in a lottery by purchasing tickets using Matic cryptocurrency. The smart contract governing the lottery is deployed on the Polygon Mumbai testnet.

  

## Smart Contract Details

  

### Lottery Contract

  

-  **Ticket Price:** 0.01 Matic

-  **Maximum Tickets per Lottery:** 100

-  **Ticket Commission:** 0.001 Matic per ticket

-  **Duration:** 30 minutes for each lottery

-  **Expiration:** Timeout in case the lottery is not carried out

-  **Lottery Operator:** Address of the creator/operator of the lottery

-  **Operator's Total Commission:** Total commission balance accrued by the operator

-  **Last Winner:** Address of the last winner of the lottery

-  **Last Winner Amount:** Amount won by the last winner

  

### Functionalities

  

- Users can purchase tickets by sending the required Matic.

- The operator can draw the winner randomly after the purchase period expires.

- Winners can withdraw their winnings.

- The operator can withdraw accumulated commission.

- The lottery can be restarted if no tickets were purchased.

  

## Technologies Used

  

- Solidity for Smart Contract Development

- Next.js for the Web Application Interface

- ThirdWeb for Smart Contract Interaction

- Tailwind CSS for Styling

- TypeScript for Typed JavaScript Development

  

## How to Use

  

1. Ensure you have a compatible Ethereum wallet (such as MetaMask) configured for the Polygon network (Mumbai testnet) and sufficient Matic to purchase tickets.

2. Access the dapp interface deployed on a web browser.

3. Connect your Ethereum wallet to the dapp and switch to the Mumbai testnet.

4. View the current lottery details, such as remaining tickets, ticket price, and total pool, in Matic.

5. Purchase tickets by specifying the quantity and confirming the transaction.

6. Monitor the countdown timer for the lottery expiration.

7. If you win, withdraw your winnings through the interface.

8. If you're the lottery operator, manage the lottery through the admin controls.

  

## Installation

  

1. Clone the repository.

2. Install dependencies using `npm install`.

3. Set up environment variables required for the application.

4. Run the application using `npm run dev`.

  

## Known Issues and Future Improvements

  

- Improvement: Implement better UI/UX for a more engaging user experience.

- Known Issue: Lack of extensive error handling in certain scenarios.

- Enhancement: Add more functionalities like multiple lottery rounds, different prize structures, etc.

  
  

## Credits
This dapp is powered by ThirdWeb.