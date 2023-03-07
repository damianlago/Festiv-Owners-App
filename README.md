## Getting Started

First, install all dependencies. Run this command on the project root directory
```bash
npm i
```

Then, create the [.env.local] file in the root directory. This file will contain all data for access external services such as Firebase and Auth0.

After, run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

For finally, open [http://localhost:3000] with your browser to see the result.


## ROUTES

Index (app.festiv...) -> Lading page announcing Festiv services

    ```
         ---- IF login button pushed ----
            Login Component THEN...

            -> User is NOT register RENDER 
                Register Component

            -> User is registered and logged RENDER 
                Dashboard Component 
    ```

SETTINGS (app.festiv.io/settings)
    - Index: User Settings Page

EVENT (app.festiv.io/{eventId}
    - Index: Event Information Page


## DEPENDENCIES

- Nextjs Auth0 (Auth0 SDK)
- Firebase (Firebase SDK)
- React Hook Form (Forms maker library)
- SWR (Data fetching library)
- ChackraUI (UX/UI library)

## ENV VARIABLES

NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyB77HCIBA47J1NLmtOlCJUsJcVqqZ9PYTg
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=festiv-62aea.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=festiv-62aea
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=festiv-62aea.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=210736592374
NEXT_PUBLIC_FIREBASE_APP_ID=1:210736592374:web:ff1cb25cf4d1179e7f83d7
NEXT_PUBLIC_FIREBASE_DATABASE_URL=https://festiv-62aea.firebaseio.com
FIREBASE_PRIVATE_KEY='"MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCoQqGkg2Ocmbtz\nToyomWOgQ22jP2JMid/xj8dcZwJHCqP6WWFQ/pgWcJzqArLY3eub297G11g2Kum+\n1Wy3mmG/T+ebVDPNGo6CarVUx50zEHxyEA5i41OBNh/G3JqoDvi21nx9fvzCHxvG\njrO+SsEuCtLY9DLkUFynAALxENONgsaFC0pftLNv6o+4RJq49o2VMm8xavGCF1z4\nnaDl1y8YRyGQmrEj7HhRZxSrk+YtJOjQcEqaG/Qh04IWXxHXTAzhh42kaniKXA3S\nDlvg/7t4S7/i433aKZweiGXifa175YVpLi5jFCN6Yq4a04YqO/iJ66+R7roY19xY\nfxDxU+hHAgMBAAECggEAPgYBy8DbETjiDkkgNG4GeWchnRGaTJhuQn87f+ZAwqs7\ncudLpi2TJoJwdRp1jtePKC7OWgG7dIwxCbVmk++GpJzxxSIuziZB7fUjzpKecdpb\n5Tfh9bXSbEjlQcrD/7s1F0DNNv1+cphBBtpHi5fGyhAXVP3/XIX7AVxRuUb4lKrM\nvwOgjZO4eMI828xuG6m9TQMNCcA/ZDiGAhNwSToRhHo1yelZaJxP/8SiipU2M50L\nI054g6JIii4+6oV6uxOFuN+8W1+MvCqFE7ctqOiYRtdS8rfRGd3X583wIQkVRxbc\nwZuY/Yaz36QUsx6/vW0IUHfty1QpZmy4flm6abMJQQKBgQDg0Gfl+lWg3ZZgWsM8\nlx8dl2Nh5LzLtG3MJDUxu3NiKvv+3yHhg7+SrQxBFWXHeTznE7L+VmYpUrBN0xtg\n03lB5Em9bbOVE01FSHZHuEBqOTUZE6bOL12IIm2EAJzs4uX+LE0cOhjyMBem8NjX\nRDx1C+xHSYTCwqSjzPQ6sojoEQKBgQC/meNA8noSrCgVsvzNKmJftOX7rdGtdcBY\nvpr6RlHMj5POZ3jnLCRpvf4Zrs9aprtSgM64mysj93CXoeP897gUjHmWiJu3iIeC\n5GK4J+sHEvea2xOHnT6MWSBUchwymOlyKor0Q9DailHu/YU9O/O2ISUhKhCa98fH\nnPYXNdri1wKBgQDBuLQfB3Ur9mWzR+K+3lYwsJgx7eIGAscuRvETlryZlgKpoGrY\noie9Y6KQnriih8VENcRix96msxs7JLON3wy5C9fDBLnfts856XQK3ymanwszPaza\nNRR6z3fhbInM0sRvHoufzCxc3bYz44xnCuSx04FZ+G8PSJyIjX7S6a9xkQKBgQC4\nNdsA2V+2TiBn5GMbWhGklIa897vs+pYIfJEB6NPCSZRA0Miz8YO8ynbf+GrRbBYT\nV1XotP7AIKj2kCZjU0N/NiO8L/EOfsxScwParD5R2dGG5/QZ4Xt+cj4cEm2707o2\nEmLwP7cwNeZaURJl8hr5U1qgTRIT+//ukaEkZZnhlwKBgQCb04XRBJHPhz07YASj\n4L4ymhT2sb5PpeFac7Pt5aJtRC0stzHOEaEoZL9P0VDxeIPq4BaIYJIBDzmmu27Z\noz3JQVjYir0pzo5AANDTb2e9V6yvjbLWXfRrS9v1ymZukRiyrSCaDePCWGomdvZ3\nk6kq6L8NL2sP635913dTfe5OEw=="'
AUTH0_SECRET='b1c7f63136f460fb05391be2bda10f952f9e4a5e3775d86aee5101c203f3f11f'
AUTH0_BASE_URL='http://localhost:3000'
AUTH0_ISSUER_BASE_URL='https://dev-5aa5ueqrokcwkkc3.us.auth0.com'
AUTH0_CLIENT_ID='jL5swH4x7EWE5caHFIrO0Vbk2yEvlYMJ'
AUTH0_CLIENT_SECRET='M5dIFlOUEsjR5-75bcPiQlT_84r9sSBLSkoZ1PSV9Jrn5QwgdTxqjCIar6lhWcTn'