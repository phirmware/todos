import { Http } from "@angular/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.css"]
})
export class InfoComponent implements OnInit {
  id: any;
  todo: object;
  constructor(private route: ActivatedRoute, public http: Http) {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
    });

    this.http
      .get("http://localhost:3000/api/todos/" + this.id)
      .subscribe(response => {
        this.todo = response.json();
        console.log(response);
      });
  }

  ngOnInit() {}
}
