Ito ocashi review :cake:
=====================

![readme](https://raw.github.com/wiki/Ito-ocashi-review/ior-front/images/hoge.gif)

Table Of Contents
-----------------
- [What is Ito-ocashi-review?](#what-is-ito-ocashi-review-memo)
- [How to start](#How-to-Start-running)
- [Members](#members-eyes)
  - Design
  - Frontend
  - Backend
  - Infrastructure
  
What is Ito ocashi review? :memo:
==========================

* **Features**
    * Post Sweets review
    * Comment a review and reply comments
    * Evaluate sweets
    * Automatic Ranking
    * Login with external account
      - GitHub
      - TBC...

How to start :running:
============

* **Preparation**
   * Clone this repository following folder structure  
   ```
   - ito-ocashi-review
    - ior-front
    - ior-bak
   ```
   
*  **Start**
     - front
       - start docker compose in ior-front directory
         - `docker network create ito_ocashi_link`
         - `docker-compose up`
       
       - resolve dependency
         - `yarn`
       - start 
         - `yarn dev`
       - access
         - http://localhost:3000/
         
     - back
        * Prepare environmental variable
          - create .env file in top directory 
            ```
            MONGO_URI=mongodb://mongo:27017/ior-back
            GITHUB_CLIENT_ID='YOUR CLIENT ID'
            GITHUB_CLIENT_SECRET='YOUR CLIENT SECRET'
            SITE_URL=http://localhost:8000
            ```
          
        - start docker compose in ior-back directory
         - docker network create ito_ocashi_link (If you exec this command at ior-front, needless to run this command.)
         - docker-compose up
       
       - resolve dependency
         - `yarn`
       - start 
         - `yarn dev`
       - access
         - http://localhost:8000/
         

Technology :gem:
===============
- Kubenetes
- Docker
- Node.js
- Ts.ED
- MongoDB
- Javascript
- TypeScript
- React.js
- Next.js
- Mateiral-UI


Members :eyes:
==============

- Design
  - kaori
  
- Frontend
  - kenta
  - kazki
  
- Backend
  - sizma
  - itizawa
  - yusketk
  
- Infrastructure
  - kohey
  - kota
  - takayuki


<p align="center">
  <br>
  <b><a>- Members -</a></b><br>
  <br>
  <b><a><a href="https://github.com/kaoritokashiki"><img src="https://avatars2.githubusercontent.com/u/59536731?s=400&u=bc12e891add95e307d06c6989dae00fa541ea662&v=4" width="70px;" style="border-radius: 50%;" /></a></b>
  <b><a><a href="https://github.com/kenta-o-weseek"><img src="https://avatars0.githubusercontent.com/u/68103416?s=460&v=4" width="70px;" style="border-radius: 50%;" /></a></b>
  <b><a><a href="https://github.com/kazuki-homma"><img src="https://avatars0.githubusercontent.com/u/56999344?s=400&u=fae15f6d35e72c6a0ba9f3aace4da782cb1e36fa&v=4" width="70px;" style="border-radius: 50%;" /></a></b>
  <b><a><a href="https://github.com/zahmis"><img src="https://avatars1.githubusercontent.com/u/57100766?s=460&u=07ff350519633aa04f9988a2f635c7dd1160e061&v=4" width="70px;" style="border-radius: 50%;" /></a></b>
  <b><a><a href="https://github.com/itizawa"><img src="https://avatars1.githubusercontent.com/u/48426654?s=460&u=5bc8892b0f575e8e70c7903ff443faa3574178eb&v=4" width="70px;" style="border-radius: 50%;" /></a></b>
 <b><a><a href="https://github.com/yusuketk"><img src="https://avatars0.githubusercontent.com/u/38426468?s=460&v=4" width="70px;" style="border-radius: 50%;" /></a></b>
<b><a><a href="https://github.com/takayuki-t"><img src="https://avatars0.githubusercontent.com/u/52646333?s=400&v=4" width="70px;" style="border-radius: 50%;" /></a></b>
<b><a><a href="https://github.com/yamagai"><img src="https://avatars1.githubusercontent.com/u/48216243?s=400&u=28856d5fc9a71f1c247302e346ca969f617614f6&v=4" width="70px;" style="border-radius: 50%;" /></a></b>
<b><a><a href="https://github.com/
curtaincall888"><img src="https://avatars0.githubusercontent.com/u/61185362?s=400&v=4" width="70px;" style="border-radius: 50%;" /></a></b>
  </p>
<br>
