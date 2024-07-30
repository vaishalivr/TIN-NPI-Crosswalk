import pandas as pd
import random

def generate_random_tin():
    return ''.join([str(random.randint(0, 9)) for _ in range(9)])

def generate_random_npi():
    return ''.join([str(random.randint(0, 9)) for _ in range(10)])
# SAMPLE DATASET
unique_npi_count = 30
unique_tin_count = 3

unique_tins = [generate_random_tin() for _ in range(10)]
tins = [tin for tin in unique_tins for _ in range(unique_tin_count)]
npis = [generate_random_npi() for _ in range(unique_npi_count)]

#ACTUAL DATASET
# unique_tin_count = 10000000 #10 million
# unique_npi_count = 30 * unique_tin_count
# unique_tins = [generate_random_tin() for _ in range(unique_tin_count)]
# unique_npis = [generate_random_npi() for _ in range(unique_npi_count)]
# print(unique_tins)
# print(len(unique_tins))
# print(unique_npis)
# print(unique_npi_count)

data = {
    'CHAIN NAME': "chain1",
    'SUP IN CHAIN': 1,
    'TIN': tins,
    'TIN NAME': 'name1',
    'NPI': npis,
    'NPI NAME': 'npiname1',
    'NPI TYPE': 'npitype1'
}

df = pd.DataFrame(data)

#df.to_csv('tin_npi_dataset.csv', index=False)

#df_js = pd.read_csv('tin_npi_dataset.csv')
data = df.to_dict(orient='records')
js_content = f"const tinNpiData = {data};\n"

with open('data.js', 'w') as js_file:
    js_file.write(js_content)

print("JavaScript file created successfully!")

