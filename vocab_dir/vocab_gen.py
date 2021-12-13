import os
import csv
import ast
import re
import nltk
import json
nltk.download('stopwords')
nltk.download('punkt')
from nltk.corpus import stopwords 
from nltk.stem import PorterStemmer
stemmer = PorterStemmer()
stopwords_english = stopwords.words('english')

directory = r'D:\OPP-115_v1_0\dp\annotations'

category_name_Index = 6

Vocab = {'__PAD__': 0, '__</e>__': 1, '__UNK__': 2} 

def process_str(str):
    str = re.sub(r'\$\w*', '', str)
    str = re.sub(r'^RT[\s]+', '', str)
    str= re.sub(r'https?:\/\/.*[\r\n]*', '', str)
    str = re.sub(r'#', '', str)
    tokens = nltk.word_tokenize(str)
    sen_clean = []
    for word in tokens:
        if (word not in stopwords_english): 
            stem_word = stemmer.stem(word) 
            sen_clean.append(stem_word)
    return sen_clean

def output(dic):
    with open(r'D:\OPP-115_v1_0\dp\vocab_dir\words.txt', 'w') as file:
        file.write(json.dumps(dic))

def main():
    for filename in os.listdir(directory):
        final_list = []
        with open(os.path.join(directory, filename)) as csv_file:
            csv_reader = csv.reader(csv_file, delimiter=',')
            for row in csv_reader:
                val_list = list(ast.literal_eval(row[category_name_Index]).values())
                for i,dic in enumerate(val_list):
                    if "selectedText" in dic:
                        pro = process_str(dic["selectedText"])
                    for word in pro:
                        if word not in Vocab: 
                            Vocab[word] = len(Vocab)
                    if "value" in dic:
                            pro2 = process_str(dic["value"])
                    for word in pro2:
                        if word not in Vocab: 
                            Vocab[word] = len(Vocab)
    output(Vocab)
if __name__ == '__main__':
    main()






