Feature: CREACIÓN DE CUENTA
    Como usuario nuevo,
    Quiero completar un formulario de registro en la tienda,
    Para crear una cuenta y acceder a las funcionalidades de compra y servicios adicionales como el newsletter.

@CreacionCuentaExitosa
Scenario Outline: Creación exitosa de cuenta de usuario
  Given que el usuario se dirige a la página customer account create  
  When el usuario diligencia el formulario con los campos obligatorios 
    | first_name | last_name | email | password |
    | <first_name> | <last_name> | <email> | <password> |
  Then la cuenta debe ser creada exitosamente y mostrar el siguiente mensaje "Thank you for registering with Main Website Store."

  Examples:
  | first_name | last_name | email | password |
  | Juan | Pérez | juan.perezQAtest@example.com | contraseña123 |

  