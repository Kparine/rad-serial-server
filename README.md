# RPB Engineering | Coding Challenge

Thanks for applying to Rad Power Bikes. We really enjoyed chatting with you, and we'd love to see more of what you can do. To better understand your style, we'd like to give you a code challenge and see your chops in action. Feel free to pick the frontend and backend of your strength. Again no pressure; Node, Python, Vue, React, jQuery (ok, maybe not jQuery).

## Story

Given `N` serial numbers, as a user, I can enter all serial numbers into a form `textarea` and receive a response that describes detailed information about that Rad Power Bike.

#### Serial Codes

For Example, entering...

```
WBO19J101713,SB419J100413,RA118F100923,MCO19J111815,YD520V101061
```

or...

```
WBO19J101713
SB419J100413
RA118F100923
MCO19J111815
YD520V101061
```

will return the following:

| model            | model year | manufactured month | manufactured year | version | unique |
| ---------------- | ---------- | ------------------ | ----------------- | ------- | ------ |
| Runner           | 2020       | July               | 19                | 1       | 004706 |
| RadCity Stepthru | 2020       | April              | 20                | 3       | 000007 |
| Unknown          | Unknown    | Unknown            | Unknown           | 10      | 000123 |

Fortunately, the team upstairs has a spread sheet (🤮) that explains the method to the format madness:

| Example of New serial number | Bike model | Model year code | Month Codes |     | Year Manufactured (last 2 digits) in YY format (2017 would be 17 and 2018 would be 18) | Assembly Plant Code | Version of the bike (Revisions in 1, 2, 3) | serial number 6 numbers |
| ---------------------------- | ---------- | --------------- | ----------- | --- | -------------------------------------------------------------------------------------- | ------------------- | ------------------------------------------ | ----------------------- |
| RB719F1000001                | R          | B               | 7           |     | 19                                                                                     | F                   | 1                                          | 000001                  |
| HB719F1000001                | H          | B               | 7           |     | 19                                                                                     | F                   | 1                                          | 000001                  |
| SB919F1000001                | S          | B               | 9           |     | 19                                                                                     | F                   | 1                                          | 000001                  |

---

|     | **Model Codes** |                     | **Month Code** |           | **Model Year Code** |      | **Factory Code** |          |
| --- | --------------- | ------------------- | -------------- | --------- | ------------------- | ---- | ---------------- | -------- |
|     | R               | RadRover            | 1              | January   | A                   | 2018 | F                | FactoryF |
|     | M               | RadMini             | 2              | February  | B                   | 2019 | V                | FactoryV |
|     | W               | RadWagon            | 3              | March     | C                   | 2020 |                  |          |
|     | 6               | RadCity 16          | 4              | April     | D                   | 2021 |                  |          |
|     | 9               | RadCity 19          | 5              | May       |                     |      |                  |          |
|     | S               | RadCity Stepthru    | 6              | June      |                     |      |                  |          |
|     | B               | RadBurro            | 7              | July      |                     |      |                  |          |
|     | H               | RadRhino            | 8              | August    |                     |      |                  |          |
|     | C               | Large Cargo Box     | 9              | September |                     |      |                  |          |
|     | K               | Small Cargo Box     | O              | October   |                     |      |                  |          |
|     | P               | Pedicab             | N              | November  |                     |      |                  |          |
|     | F               | Flatbed             | D              | December  |                     |      |                  |          |
|     | T               | Truckbed            |                |           |                     |      |                  |          |
|     | N               | Insulated Cargo Box |                |           |                     |      |                  |          |
|     | Y               | Runner              |                |           |                     |      |                  |          |

---

## Requirements

There are a few requirements by which you will need to abide:

- You must provide a backend that

  - provides a graphql endpoint and response
  - verifies an authorization token/session or some other means to uniquely identify a request.
  - returns a the values for decoded serial numbers

- You must provide a frontend that
  - can query your backend with some sort of authorization criteria (eg: JWT) - you can hard code your JWT/Token
  - supports a text field input
  - supports a visual response of results from the backend response

### Icing on the :cake:

- add a form whereby a user can create a new serial code hash

### :cherries: on top!

- deploy your app and send us a link!
- add google auth to your app
