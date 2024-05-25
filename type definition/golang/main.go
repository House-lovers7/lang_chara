type Stats struct {
	Strength     int `json:"strength"`
	Intelligence int `json:"intelligence"`
	Dexterity    int `json:"dexterity"`
	Agility      int `json:"agility"`
	Luck         int `json:"luck"`
}

type Character struct {
	Name        string   `json:"name"`
	Age         int      `json:"age"`
	Attributes  []string `json:"attributes"`
	Personality string   `json:"personality"`
	Stats       Stats    `json:"stats"`
	Background  string   `json:"background"`
	Magic       *string  `json:"magic,omitempty"`
}

type Output []Character