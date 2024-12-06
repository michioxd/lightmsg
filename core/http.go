package core

import (
	"log"
	"net/http"
)

func InitServer() {
	fs := http.FileServer(http.Dir("public"))
	http.Handle("/", fs)

	http.HandleFunc("/ws", ConnectionHandler)

	go MsgHandler()

	log.Println("Server started on 127.0.0.1:8080")
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal(err)
	}
}
