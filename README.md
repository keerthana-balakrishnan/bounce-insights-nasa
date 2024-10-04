# Welcome Explorers 🔭

## 🟢 Live App

The repo is deployed and the app is accessable [here](https://keerthana-balakrishnan.vercel.app/) 🔗

## 🌀 Setup

1. insall node > 20, verify with `node -v`
1. clone this repository
   `git clone https://github.com/keerthana-balakrishnan/bounce-insights-nasa.git`
1. visit https://api.nasa.gov/ and signup for a api key
1. once received. validate the key works with `https://api.nasa.gov/planetary/apod?api_key=KEY_GOES_HERE`
1. visit [backend/.env](./backend/.env) and add to `NASA_API_KEY`
1. in terminal navigate to [/backend](./backend/)
1. run `npm install` (terminal should show <b>Server is running on http://localhost:3001</b>) 🎉
1. open new terminal, navigate to [/frontend](./frontend/)
1. run `npm install`
1. once finished run `npm start`
1. once `webpack compiled successfully` appears on terminal
1. visit `http://localhost:3000` if its not opened already 🎉
   - make sure frontend is running in port 3000 or adjust the ALLOW_ORIGIN in .env file at backend/.env
1. for unit tests run `npm test` in respective folders

**Note:**

- some of the 4K picture of the day images are quite large and takes time to load, this can be address with loading the low res image for the initial load
- App is designed to work well on Desktop, Tablets and Mobile

## 👩‍💻 Implementation

### ◼️ Service

Api is created using <b>Express.js</b> and has below endpoints

- GET - `pictureoftheday`
- GET - `marsroverimages`

#### → pictureoftheday

endpoint url

```
http://localhost:3001/api/pictureoftheday?date=2024-09-22
```

`date` date for which the picture of the day is required (format - YYYY-MM-DD)

**nasa api endpoint**

```
https://api.nasa.gov/planetary/apod?date=2024-09-22&api_key=PLACEHOLDER
```

#### → marsroverimages

endpoint url

```
http://localhost:3001/api/marsroverimages?rover_name=curiosity&date=2024-02-19
```

`date` date for which the images are required (format - YYYY-MM-DD)

`rover_name` name of the rover (curiosity ✅, opportunity ❌, spirit ❌)

- ✅ data available between `2011-11-26` `2024-02-19` but couldn't validate all dates

- ❌ data does not exist (image url redirected to nasa webpage)

**nasa api endpoint**

```
https://api.nasa.gov//mars-photos/api/v1/rovers/{rover_name}/photos?api_key=PLACEHOLDER&earth_date=2024-02-19
```

- `API_KEY` are securly passed to service thought env from deployment
- sevices can be secured with authentication, for now api's are secured through cors (only ux url is allow listed - controlled through env variable through deployment)

### 🌅 Frontend

Libraries used

- `@reduxjs/toolkit` `react-redux` - State Management
- `@fluentui/react` - UI Frameworks
- `react-photo-view` - Photo Viewer
- `react-toastify` - Notification

Unexpected UX Errors are handelled through error boundary and api error details are notified to the user

Project is bootstraped from [fluent create react app](https://developer.microsoft.com/en-us/fluentui#/get-started/web)
