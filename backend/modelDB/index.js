import { Sequelize } from 'sequelize';
import sequelize from '../configDB/db';
import User from './UserModel';
const db = {};
db.sequelize = sequelize;
// Эта строка присваивает объекту Sequelize свойство Sequelize объекта db. Это позволяет получить доступ к библиотеке Sequelize и ее функциональным возможностям через объект db.
db.Sequelize = Sequelize;
// Эта строка присваивает экземпляр sequelize свойству sequelize объекта db. Экземпляр sequelize представляет собой соединение с базой данных и предоставляет методы для выполнения запросов и взаимодействия с базой данных.
db.User = User(sequelize, Sequelize);

// Создав централизованный объект (db) для ссылок Sequelize,
// включая экземпляр Sequelize (db.sequelize),
// библиотеку Sequelize (db.Sequelize)
// и пользовательскую модель (db.User).
// Т. е., мы создали объект, который предоставляет удобный способ
// доступа к объектам sequelize,
// упорядочивания и User во всем нашем приложении.

export default db;
