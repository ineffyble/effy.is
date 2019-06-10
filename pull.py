from notion.client import NotionClient
import os
import json
import urllib.request

# Obtain the `token_v2` value by inspecting your browser cookies on a logged-in session on Notion.so
client = NotionClient(token_v2=os.environ["NOTION_TOKEN"])

partners = []
cv = client.get_collection_view("https://www.notion.so/ineffyble/84a8380fbf5c4ffab108b854d3dc177e?v=fccc7bcb3cc04b7fafb5ce64d19413d2")
result = cv.default_query().execute()
for row in result:
  print(row)
  if (row.icon):
    if (len(row.icon) > 1):
      print("Downloading icon for " + row.title)
      filename = row.title.lower() + "." + row.icon.split("?")[0].split(".")[-1]
      urllib.request.urlretrieve (row.icon, "src/www/images/" + filename)
      heart = {
        "type": "image",
        "image": filename
      }
    else:
      heart = {
        "type": "emoji",
        "emoji": row.icon
      }
  else:
    heart = {}
  partners.append({
    "name": row.title,
    "current": True,
    "system": row.system[0].title,
    "anniversary": row.started_dating.start.strftime('%Y-%m-%d'),
    "heart": heart
  })

with open("src/www/data/partners.json", "w") as partners_file:
  print(json.dumps(partners), file=partners_file)