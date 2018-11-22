<?php
/**
 * Created by PhpStorm.
 * User: trustylabs
 * Date: 11/22/18
 * Time: 10:07 AM
 */

class FormDB
{

    const DB_HOST = 'localhost';
    const DB_NAME = 'audio';
    const DB_USER = 'root';
    const DB_PASSWORD = 'root';

    /**
     * Open the database connection
     */
    public function __construct() {
        // open database connection
        $conStr = sprintf("mysql:host=%s;dbname=%s;", self::DB_HOST, self::DB_NAME);

        try {
            $this->pdo = new \PDO($conStr, self::DB_USER, self::DB_PASSWORD);
        } catch (\PDOException $e) {
            echo $e->getMessage();
        }
    }


    public function addForm($parent_first_name, $parent_last_name, $parent_nationality, $email, $telephone, $dulwich_pudong, $number_childreen) {

        $sql = "INSERT INTO form(parent_first_name, parent_last_name, parent_nationality, email, telephone, dulwich_pudong, number_childreen) 
                      VALUES(:parent_first_name, :parent_last_name, :parent_nationality, :email, :telephone, :dulwich_pudong, :number_childreen)";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindParam(':parent_first_name', $parent_first_name);
        $stmt->bindParam(':parent_last_name', $parent_last_name);
        $stmt->bindParam(':parent_nationality', $parent_nationality);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':telephone', $telephone);
        $stmt->bindParam(':dulwich_pudong', $dulwich_pudong);
        $stmt->bindParam(':number_childreen', $number_childreen);
        return $stmt->execute();
    }

    public function getAllForms() {

        $sql = "SELECT * FROM form";

        $stmt = $this->pdo->prepare($sql);
        $stmt->execute();
        return $stmt->fetchAll();
    }


    /**
     * close the database connection
     */
    public function __destruct() {
        // close the database connection
        $this->pdo = null;
    }
}