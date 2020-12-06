# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# IYZICO Case Notları

Proje içerisinde 2 farklı case yaklaşıma sahip infiniti-scroll içeren anasayfa bulunmaktadır.

Scroll yapılarak data çekme işlemi yapılır ve bir sonraki requestin nereye atılacağı burdan belirlenir. Detay sayfasına gidip geri geldikten sonra state sıfırlanmamış, aynı şekilde durmaktadır. Kalınan pageden scroll edilmeye devam edilebilmektedir.

Örnek Test URL: http://localhost:3000/
![alt text](https://raw.githubusercontent.com/umtdlgc/iyzico-case/main/public/assets/iyzico-case-homev1.PNG)

Scroll edildikçe url deki page değeri güncellemektedir. Detay sayfasından geri dönüldüğünde yada page parametresi ile gelindiğinde (page=5) ilgili sayfanın datalarını apiden çekilmektedir.Bu casede infiniti-scroll 2 taraflı çekilecek şekilde ayarlanmıştır.

Örnek Test URL: http://localhost:3000/page=5
![alt text](https://raw.githubusercontent.com/umtdlgc/iyzico-case/main/public/assets/iyzico-case-homev2.PNG)

Proje tamamlandıktan sonrasıda sonarqube üzerinden test edilerek kontrol yapılmıştır.
![alt text](https://raw.githubusercontent.com/umtdlgc/iyzico-case/main/public/assets/iyzico-sonarqube-result.PNG)
