# Bank of Flatiron App
The Royal Bank of Flatiron" is a comprehensive transaction management application designed to help users effectively track, manage, and analyze their financial activities. With an intuitive user interface and powerful features, this application simplifies the process of recording transactions, providing users with valuable insights into their spending habits and financial health

 ## Features 
 1. Search transaction by description 
 2. Add transaction 
 3. Sort transaction by category or description
 4. View transactions history
 5. Delete transaction

## Usage
The app main features include: 
1. Search transactions using the search bar at the top of the transactions page to filter transactions by description
2. Add new transactions by filling in the provided trnsaction detail form and clicking on the add transaction button. This feature posts the new trnsaction into the database; db.json file.
3. Sort transactions either by clicking sort by category or description button, description on the selected button are displayed on the side on lightblue background.
4. View transaction history with date of the transaction, description, category and amount
5. Delete transactions by clicking on delete button and the furthest column on the right. This deletes transaction on the report and in the database.

## Technologies Used
- Frontend: React.js for building the user interface.
- Styling: CSS for basic styling.
- State Management: React Hooks for managing state within components.
- Data Management: db.json files storing bank transactions data.
- Development Environment: Node.js for running the development server.

## How to Get Started
### Prerequisites
Have Node.js installed on your machine.

### Installation
1. Clone the repository: ```git@github.com:Moringa-SDF-PTO5/bank-of-flatiron-rosalia-wanjohi.git```
2. Navigate to the project directory cd ```bank-of-flatiron-app```
3. Install dependencies using ```npm install```

## Run the App
Start the development server using ```npm run dev``` command 
Open your web browser and navigate to http://localhost:5173/ to view the app.

## DEMO
The app has also been deployed on vercel.com, you can access it using [app](https://bank-of-flatiron-rosalia-wanjohi.vercel.app/).

## Credits 
 - Rosalia Njoki: App Development

## License
This app has MIT License Copyright (c) [2024] to Rosalia Njoki 
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
