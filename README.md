# Bitcoin Transaction Dashboard Coding Challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Instructions to install and run project locally

1. clone the repo locally on your machine.
2. Make sure `node.js` is installed on your local machine: `https://nodejs.org/en/download/package-manager`
3. navigate to the project directory in your local terminal.
3. Run the command `npm install` to install the project's dependencies.
4. Run the command `npm start`. This should automatically open the project in your browser window.
5. In the event that your browser window does not automatically open, open a browser window and enter `localhost:3000` in the URL address bar and click enter on your keyboard.


## Design feedback
- The design has a nice aesthetic.

- I noticed in the design, that there was no button for submitting a transaction id after adding it to the input in the header. The design could be made to work as is by triggering the search when the user types or clicks on the input, but that has server cost implications, especially if many people are using this feature. User's would be submitting multiple requests, when only meaning to submit one. It could also potentially lead to a poor user experience if a user gets multiple errors while entering the transaction id.

- I was also confused about certain data points in the figma design, so perhaps the design can be updated to make these things more clear:

    1. `The id next to the copy to clipboard button under the header` - I noticed in the design file that this id was different than the id in the transaction id search box, which made me question whether it was meant to be the `transaction id` or a different id, like the `block hash`.

    2. `The Transaction's current value in the transaction description under the header ($153.93)` - This number in the design seems to be unrelated to the amount and fee data points below it, which made me unsure about how it was being derived or what it was referring to. In my solution I added up the fee and the transaction amount to produce a transaction's current value. I'm not sure if that was the intention, so clarifying it in the design file would clear up the confusion.

    3. `The star and ellipis icons` - It isn't clear in the design what the purpose of these buttons is supposed to be. I therefore included them as placeholders, but didn't give them any functionality. 

    4. `The transaction timestamp and age` - It wasn't clear to me whether these should refer to the time the transaction was first made/broadcast or the time the transaction was confirmed. I ultimately set these values to be the time the transaction was confirmed and gave each a value of pending prior to the transaction's confirmation. That said, I'm not sure if that was the intention and clarifying it would be helpful to both the developer and the user. I also followed the design to include hours, minutes, and seconds, but for older transactions, you might want to consider days, months, and years.



## What I would have done with more time
1. I would have added unit/integration tests
2. I would have added css modules so that css could be scoped to individual components
3. I would have set up a eslint with A11y, and a code formatter, like prettier, to help make the code more maintainable
4. I would have set up husky.js to trigger the linter and formatter with git hooks.
5. I would have considered adding typescript
6. I would have considered refactoring the error handling to use react error boundaries.