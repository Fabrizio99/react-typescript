export interface CountryModel {
    name:         {
        common:     string;
        official:   string;
    };
    tld:          string[];
    cca2:         string;
    ccn3:         string;
    cca3:         string;
    cioc:         string;
    independent:  boolean;
    status:       string;
    unMember:     boolean;
    currencies:   any;
    idd:          any;
    capital:      string[];
    altSpellings: string[];
    region:       string;
    subregion:    string;
    languages:    any;
    translations: any;
    latlng:       number[];
    landlocked:   boolean;
    borders:      string[];
    area:         number;
    demonyms:     any;
    flag:         string;
    maps:         any;
    population:   number;
    flags:        any;
}