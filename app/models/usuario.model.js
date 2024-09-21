module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define('usuario', {
      id_usuario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nombre: {
        type: Sequelize.STRING(50), // Nombre, texto de hasta 50 caracteres
        allowNull: false
      },
      apellido: {
        type: Sequelize.STRING(50), // Apellido, texto de hasta 50 caracteres
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(100), // Email, texto de hasta 100 caracteres
        allowNull: false,
        unique: true // Asegura que el email sea único
      },
      telefono: {
        type: Sequelize.STRING(15) // Teléfono, texto de hasta 15 caracteres
      },
      direccion: {
        type: Sequelize.STRING(100) // Dirección, texto de hasta 100 caracteres
      },
      fecha_registro: {
        type: Sequelize.DATE, // Fecha de registro
        defaultValue: Sequelize.NOW // Por defecto, la fecha y hora actual
      },
      estado: {
        type: Sequelize.STRING(10), // Estado, texto de hasta 10 caracteres
        allowNull: false
      }
    });
  
    return Usuario;
  }
  