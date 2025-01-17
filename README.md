# Generador de Tokens JWT RSA 256

Este proyecto en Node.js genera tokens JWT utilizando el algoritmo RSA 256. Es un artefacto reutilizable que puede ser utilizado en diferentes proyectos que requieran autenticación y seguridad.

## Requisitos Previos

1. **Node.js**: Asegúrate de tener Node.js instalado en tu sistema. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).
2. **Certificados RSA**: Necesitarás archivos `key.pem` y `certificate.pem`.

## Instalación

1. **Clona el repositorio** o descarga los archivos del script en tu máquina local.
   ```sh
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_REPOSITORIO>```
2. Instala las dependencias necesarias.
```
npm install
```

## Configuración
### Variables de Entorno
**En Linux**
1. Abre tu archivo de configuración del shell (```~/.bashrc, ~/.zshrc, etc.```):
```sudo nano ~/.bashrc  # o ~/.zshrc si usas Zsh```

2. Añade las variables de entorno necesarias para Linux:
```export LINUX_PRIVATE_KEY_PATH="/mnt/c/Users/user-example/ruta/a/la llave/privada/key.pem"
export LINUX_PUBLIC_KEY_PATH="/mnt/c/Users/user-example/ruta/a/la/llave/publica/certificate.pem"
export TOKEN_GENERATOR_PATH = "/mnt/c/Users/user-example/ruta/al/proyect/rsa_256_token_generator"
export APP_ID_DEV="99ceae29d9519cabe8f48cacc06c41c1"
export APP_ID_QA="8ab712178688c33dd3985ed2932a344f"
export APP_ID_SB="b4487d875c2fe2bd1f8ef54dad5fc75c"
```

3. Guarda los cambios y cierra el archivo (usa Ctrl+X, luego Y y Enter en nano).

4. Recarga el archivo de configuración(o reinicia la terminal):
```source ~/.bashrc  # o source ~/.zshrc si usas Zsh```

**En Windows (PowerShell)**
1. Abre PowerShell como administrador.

2. Añade las variables de entorno a tu perfil de PowerShell:

```notepad $PROFILE```

3. Añade las variables de entorno al archivo:

```$env:WINDOWS_PRIVATE_KEY_PATH = "C:\ruta\a\la\llave\privada\key.pem"
$env:WINDOWS_PUBLIC_KEY_PATH = "C:\ruta\a\la\llave\publica\certificate.pem"
$env:TOKEN_GENERATOR_PATH = "C:\ruta\a\tu\proyecto\ rsa_256_token_generator"
$env:APP_ID_DEV = "application -id-dev"
$env:APP_ID_QA = "application-id-qa"
$env:APP_ID_SB = "application-id-sandbox"
```
4. Guarda el archivo y cierra el editor.

5. Recarga tu perfil de PowerShell:

```. $PROFILE```

### Alias
**En Linux**
Añade el siguiente alias en tu archivo de configuración de shell:
```alias generate_tokenv2="rm -f $TOKEN_GENERATOR_PATH/output.log && 
   node $TOKEN_GENERATOR_PATH/tokenGenerator.js $APP_ID_1 $APP_ID_2 $APP_ID_3 > $TOKEN_GENERATOR_PATH/output.log && 
   cat $TOKEN_GENERATOR_PATH/output.log"```
**En Windows (PowerShell)**
1. Añade el alias en PowerShell en el mismo archivo que se agregan las variables de entorno:

```function generate-token {
     Remove-Item -Path "$env:TOKEN_GENERATOR_PATH\output.log" -Force
    node "$env:TOKEN_GENERATOR_PATH\tokenGenerator.js" $env:APP_ID_1   env:APP_ID_2 $env:APP_ID_3 | Out-File -FilePath "$env:TOKEN_GENERATOR_PATH\output.log"
    Get-Content "$env:TOKEN_GENERATOR_PATH\output.log"
}

Set-Alias generate_token generate-token
```
### Uso
Para generar los tokens JWT, simplemente ejecuta el alias:
• **En Linux:**
       	```generate_token```
• **En PowerShell en Windows:**
```generate_token```

### Pruebas
Para probar que el script funciona correctamente, sigue estos pasos:
• **En Linux:**

1. Verifica que las variables de entorno están correctamente configuradas:
```echo $TOKEN_GENERATOR_PATH
echo $APP_ID_DEV
echo $APP_ID_QA
echo $APP_ID_SB```

2. Ejecuta el alias:
```generate_token```
La salida debería mostrar los tokens JWT generados para cada ambiente (dev, qa, sb).
• **  En Windows:**

1. Verifica que las variables de entorno están correctamente configuradas:
```echo $env:TOKEN_GENERATOR_PATH
echo $env:APP_ID_DEV
echo $env:APP_ID_QA
echo $env:APP_ID_SB
```
2. Ejecuta el alias:
```generate_token```
La salida debería mostrar los tokens JWT generados para cada ambiente (dev, qa, sb).

## Ejemplo Práctico
```generate_token```

Salida esperada:
```JWT dev: <token_generado_para_dev>
JWT qa: <token_generado_para_qa>
JWT sb: <token_generado_para_sb>```

## Fuentes  

Documentación de JSON Web Tokens (JWT):
- JWT.io (JSON Web Token Introduction - jwt.io)
Librería jsonwebtoken en Node.js:
- jsonwebtoken en npm 
Trabajar con Sistemas de Archivos en Node.js:
- Documentación de fs  

