# Automation Assignment

## Project Description

This project demonstrates basic UI and API automation using Playwright. It includes simple UI validations and API response testing.


## Framework & Tools Used

* Playwright (JavaScript)
* Node.js


## Test Cases Implemented

### 1. UI Test

**File:** `tests/basic.spec.js`

* Opens the Automation Anywhere website
* Verifies:

  * Page URL
  * Page title


### 2. API Test

**File:** `tests/api.spec.js`

* Sends a GET request to fetch data
* Validates:

  * HTTP status code (200)
  * Response contains data


## Project Structure

automation-assignment/
<br>
│
├── pages/
<br>
│   └── HomePage.js
<br>
│   └── LoginPage.js
<br>
│<br>
├── tests/
<br>
│   ├── api.spec.js
<br>
│   ├── basic.spec.js
<br>
│   ├── example.spec.js
<br>
│   └── login.spec.js
<br>
│   └── navigation.spec.js.spec.js
<br>
│
├── playwright.config.js
<br>
└── README.md


## Setup Instructions

1. Install dependencies:
   npm install

2. Run UI test:
   npx playwright test tests/basic.spec.js --headed

3. Run API test:
   npx playwright test tests/api.spec.js
   
