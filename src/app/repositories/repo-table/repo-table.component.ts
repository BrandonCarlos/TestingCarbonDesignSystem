import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {
  TableModel,
  TableItem,
  TableHeaderItem,
  Table
 } from 'carbon-components-angular';

@ViewChild('linkTemplate', null)

@Component({
  selector: 'app-repo-table',
  templateUrl: './repo-table.component.html',
  styleUrls: ['./repo-table.component.scss']
})
export class RepoTableComponent implements OnInit {
  model = new TableModel();
  skeletonModel = Table.skeletonModel(10, 6); // reserved 10 rows
  skeleton = true;

  data = [];

  constructor(
    private apollo: Apollo,
    protected linkTemplate: TemplateRef<any>
    ) { }

  ngOnInit(): void {

  this.apollo.watchQuery({// query
    query: gql`
      query REPO_QUERY {
        organization(login: "carbon-design-system") {
          repositories(first: 75, orderBy: { field: UPDATED_AT, direction: DESC }) {
            totalCount
            nodes {
              url
              homepageUrl
              issues(filterBy: { states: OPEN }) {
                totalCount
              }
              stargazers {
                totalCount
              }
              releases(first: 1) {
                totalCount
                nodes {
                  name
                }
              }
              name
              updatedAt
              createdAt
              description
              id
            }
          }
        }
      }
    `
    }).valueChanges.subscribe((response: any) => {// if values changes then reload table with new data
      if (response.error) {
        const errorData = [];
        errorData.push([
          new TableItem({ data: 'error!' })
        ]);
        this.model.data = errorData;
      } else if (response.loading) {
        // add state loading
        this.skeleton = true;
      } else {
        console.log(response);
      }

      this.model.data = this.prepareData(
        response.data.organization.repositories.nodes
      );
      this.data = response.data.organization.repositories.nodes;
      this.model.pageLength = 10;
      this.model.totalDataLength = response.data.organization.repositories.totalCount;
      this.selectPage(1);
      });
    }

    selectPage(page) {// feature of pagination
      const offset = this.model.pageLength * (page - 1);
      const pageRawData = this.data.slice(offset, offset + this.model.pageLength);
      this.model.data = this.prepareData(pageRawData);
      this.model.currentPage = page;
    }

    prepareData(data) {
      this.skeleton = false;
      // data = [];
      const newData = [];
      for (const datum of data) {
        newData.push([
          new TableItem({ data: datum.name, expandedData: datum.description }),
          new TableItem({ data: new Date(datum.createdAt).toLocaleDateString() }),
          new TableItem({ data: new Date(datum.updatedAt).toLocaleDateString() }),
          new TableItem({ data: datum.issues.totalCount }),
          new TableItem({
            data: {
              github: datum.url,
              homepage: datum.homepageUrl
            },
            template: this.linkTemplate
          })
        ]);
      }
      return newData;
    }

  }
