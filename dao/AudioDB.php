<?php
/**
 * Created by PhpStorm.
 * User: trustylabs
 * Date: 11/13/18
 * Time: 10:12 AM
 */

class AudioDB
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


    public function addAudio($filename) {

        $sql = "INSERT INTO audio(filename) 
                      VALUES(:filename)";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindParam(':filename', $filename);
        return $stmt->execute();
    }

    public function getAllAudio() {

        $sql = "SELECT * FROM audio";

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