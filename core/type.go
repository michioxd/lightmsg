package core

type MsgType struct {
	Username string `json:"username"`
	UUID     string `json:"uuid"`
	Content  string `json:"content"`
	Date     string `json:"date"`
}
