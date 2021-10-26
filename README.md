# NAB Automation Test Project

Here you will find some examples that demonstrate:

    - Search weather in your city
 
## Environment Setting Up

1. Install nodejs:  

   https://nodejs.org/en/download/
  
2. Install testcafe:  

   https://testcafe.io/documentation/402834/guides/basic-guides/install-testcafe
    
3. Regarding document how to use testcafe:  

   https://testcafe.io/documentation/402963/guides/advanced-guides/speed-up-test-execution
    
4. IDE Visual Studio Code:  

   https://code.visualstudio.com/download 
    
5. Install report for Test cafe

   ```sh
   npm install testcafe-reporter-html
   ```

## Installation

Clone this repository:

```sh
git clone https://github.com/thanhlamctk33/nab_automation_test.git
```


## Usage
Run Command:

```sh
testcafe  chrome .\TestScript\search_city_page_test.js -e  -r xunit:result.xml
```
    
To run all tests in  Firefox, Safari and IE

```sh
testcafe  firefox .\TestScript\search_city_page_test.js -e  -r xunit:result.xml
```

```sh
testcafe  safari .\TestScript\search_city_page_test.js -e  -r xunit:result.xml
```
You can also run on headless mode:

```sh
testcafe  chrome:headless .\TestScript\search_city_page_test.js -e   
```

For Manual test cases you can find ino folder _"ManualTestCase\TestCases"_
