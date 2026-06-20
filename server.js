services:
  - type: web
    name: fibravit-visitas
    env: node
    buildCommand: npm install
    startCommand: node server.js
    envVars:
      - key: DB_DIR
        value: /data
    disk:
      name: fibravit-db
      mountPath: /data
      sizeGB: 1