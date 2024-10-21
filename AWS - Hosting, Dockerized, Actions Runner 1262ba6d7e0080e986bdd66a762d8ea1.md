# AWS - Hosting, Dockerized, Actions Runner

Prerequisites - AWS Account & GitHub repo which is configured to the need

1. AWS & Docker
    
    [https://youtu.be/VQrosr313TU](https://youtu.be/VQrosr313TU)
    
2. GitHub Actions
    
    [https://youtu.be/WW0EOn7Jq3g](https://youtu.be/WW0EOn7Jq3g)
    

Steps & Commands

- Start an EC2 instance. ( Go for Free Tier )
    
    Suggested
    
    ```bash
    Region - Stockholm
    Instance category - t3.micro or t2.micro
    Space - 20GB ( 30GB Max in free tier )
    Allow https & http traffic. Also add needful inbound rules
    Create a key pair.
    ```
    
    - Grant needful permissions for pem file according to your personal machine OS & SSH to you VM
        - Windows - Go to properties & manage permissions or
        
        cd C:\Users\<username-your>\<folder>\ict
        
        ```bash
        icacls govind.pem /inheritance:r
        icacls govind.pem /grant:r "%username%":"(R)"
        
        icacls ict.pem
        ```
        
        For Ubuntu / other linux based
        
        ```bash
        chmod 400 ict.pem
        ```
        
- Install node and npm using nvm
    1. Open a terminal and run the following command to download the NVM installation script:
        
        ```bash
        curl -o- <https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh> | bash
        
        ```
        
    2. After installation, load NVM into your shell environment by running:
        
        ```bash
        source ~/.bashrc
        
        ```
        
    3. You can verify that NVM is installed by checking its version:
        
        ```bash
        nvm --version
        
        ```
        
    
    ### Step 2: Install Node.js Using NVM
    
    1. List available Node.js versions:
        
        ```bash
        nvm ls-remote
        
        ```
        
    
    To install the LTS (Long Term Support) version of Node.js using NVM, you can follow these steps:
    
    1. Use NVM to install the latest LTS version:
        
        ```bash
        nvm install --lts
        
        ```
        
    
    ### Step 3: Verify Installation
    
    - Check the installed Node.js version (LTS):
        
        ```bash
        node -v
        
        ```
        
    - Check the npm version:
        
        ```bash
        npm -v
        
        ```
        
    
    This will ensure you have the latest LTS version of Node.js installed.
    
- Clone GitHub repo & do needful
    
    [https://github.com/theinfinox/courseApp.git](https://github.com/theinfinox/courseApp.git)
    
    ```bash
    git clone https://github.com/theinfinox/courseApp.git
    
    ```
    
    Config vite to host - Check under scripts in  *frontend/package.json*
    
    ```bash
        "dev": "vite --host 0.0.0.0"
    ```
    
    - Open needful ports - firewall allow (optional)
        
        ```bash
        sudo ufw enable && sudo ufw allow 22
        # if you dont allow 22 port ssh will blocked.
        # allow frontend port, backend, mongodb according to your need
        sudo ufw allow 5173 
        sudo ufw allow 5050
        sudo ufw allow 27017
        ```
        
- Generic method
    
    ```bash
    npm run dev
    ```
    
- Using PM2
    
    To install `pm2` and run the `npm run dev` command for your app with the name `mern-app` using `pm2`, follow these steps:
    
    ### Step 1: Install `pm2`
    
    1. Install `pm2` globally using npm:
        
        ```bash
        npm install -g pm2
        
        ```
        
    2. Verify the installation:
        
        ```bash
        pm2 -v
        
        ```
        
    
    ### Step 2: Run `npm run dev` Using `pm2`
    
    1. Navigate to your project directory where the `package.json` file is located.
    2. Run your `npm run dev` script using `pm2` with a custom name (`mern-app`):
        
        ```bash
        pm2 start npm --name "mern-app" -- run dev
        
        ```
        
        - `-name "mern-app"` assigns the name `mern-app` to this process in `pm2`.
        - `npm -- run dev` runs your `npm run dev` script using `pm2`.
    
    ### Step 3: Monitor and Manage the App
    
    - To check the status of your app:
        
        ```bash
        pm2 list
        
        ```
        
    - To view the logs:
        
        ```bash
        pm2 logs mern-app
        
        ```
        
    - To stop the app:
        
        ```bash
        pm2 stop mern-app
        
        ```
        
    - To restart the app:
        
        ```bash
        pm2 restart mern-app
        
        ```
        
    - To save the process list to restart on system reboot:
        
        ```bash
        pm2 save
        
        ```
        
    
    With this setup, your `npm run dev` script will be managed by `pm2` under the name `mern-app`, making it easier to handle in production.
    
    - (Optional Step) 
     To ensure that your app managed by `pm2` starts automatically on every restart of the instance (server), follow these steps:
        
        ### Step 1: Save the PM2 Process List
        
        1. After starting your app using `pm2`, save the current process list:
            
            ```bash
            pm2 save
            
            ```
            
            This saves the process list to be used on system reboot.
            
        
        ### Step 2: Set Up PM2 Startup Script
        
        1. Generate a startup script for your operating system. This allows PM2 to automatically start on system boot:
            
            ```bash
            pm2 startup
            
            ```
            
        2. The above command will output a command that you need to run with `sudo`. It will look something like this (depending on your OS):
            
            ```bash
            sudo env PATH=$PATH:/home/your_user/.nvm/versions/node/v18.18.0/bin /home/your_user/.nvm/versions/node/v18.18.0/lib/node_modules/pm2/bin/pm2 startup systemd -u your_user --hp /home/your_user
            
            ```
            
            Copy and run this command as instructed.
            
        
        ### Step 3: Verify the Setup
        
        1. You can verify if the startup script was installed correctly by rebooting the instance:
            
            ```bash
            sudo reboot
            
            ```
            
        2. After the reboot, check if your app is running:
            
            ```bash
            pm2 list
            
            ```
            
        
        This setup ensures that `pm2` automatically starts and restores your saved processes (like `mern-app`) every time the server reboots.
        
    
- Using Dockerfile
    
    
    1. Install Docker CE
    
    [https://docs.docker.com/engine/install/ubuntu/](https://docs.docker.com/engine/install/ubuntu/)
    
    1. Post-Instalation Docker
    
    [https://docs.docker.com/engine/install/linux-postinstall/](https://docs.docker.com/engine/install/linux-postinstall/)
    
    1. Install Portainer CE
    
    [https://docs.portainer.io/start/install-ce/server/docker/linux](https://docs.portainer.io/start/install-ce/server/docker/linux)
    
    ```docker
    docker volume create portainer_data
    ```
    
    ```docker
    docker run -d -p 8000:8000 -p 9000:9000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:2.21.3
    ```
    
    1. Dockerfile is available in GitHub repo refer & steps are provided on it’s README.md
- CI CD using GitHub Actions
    
    Follow the video
    
    [https://youtu.be/WW0EOn7Jq3g](https://youtu.be/WW0EOn7Jq3g)