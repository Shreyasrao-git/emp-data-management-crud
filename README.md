# emp-data-management-crud

shreyasphuke/angular-image:v1 —> http://springboot-service:8080/employee
shreyasphuke/angular-image:v2 —> https://springboot-service:8080/employee
shreyasphuke/angular-image:v3 —> http://springboot-service:30002/employee
shreyasphuke/angular-image:v6 —> http://serviceipaddress:30002/employee
shreyasphuke/angular-image:v7 —> http://springboot-service.default.svc.cluster.local:8080/employee
shreyasphuke/angular-image:v8 —> http://springboot-service.default.svc.cluster.local:30002/employee
shreyasphuke/angular-image:v4 —> http://springboot-service:8080/employee (with nginx server in the dockerfile)
shreyasphuke/angular-image:v5 —> http://ipaddress:30002/employee (with nginx server in the dockerfile)


shreyasphuke/springboot-image:v2   —> localhost shreyasphuke/mysql:v2                       —> localhost
shreyasphuke/angular-image:v9       —> localhost


shreyasphuke/angular-image:v10 -> /api/employee
shreyasphuke/springboot-image:v3 -> /api/emplyee

shreyasphuke/angular-image:v11 -> /api/employee (changed package.json and create proxy.conf.json in emp angularapp)
proxy.conf.json

{
  "/api": {
    "target": "http://springboot-service:8080",
    "secure": false,
    "changeOrigin": true,
    "logLevel": "debug"
  }
}


package.json

"start": "ng serve --host 0.0.0.0 --disable-host-check --proxy-config proxy.conf.json",
