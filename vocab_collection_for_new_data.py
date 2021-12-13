import os
import csv
import ast
import re
import nltk
import json
from nltk import text
nltk.download('stopwords')
nltk.download('punkt')
from nltk.corpus import stopwords 
from nltk.stem import PorterStemmer
stemmer = PorterStemmer()
stopwords_english = stopwords.words('english')

directory = r'D:\OPP-115_v1_0\dp\new_policies'


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

def output(lis):
    with open(r'D:\OPP-115_v1_0\dp\sent_temp.txt', 'w') as fil:
        fil.write(json.dumps(lis))
a_list = []
def out2(dic):
    with open(r'D:\OPP-115_v1_0\dp\vocab_dir\words.txt', 'w') as word_fle:
        word_fle.write(json.dumps(dic))
def main():
    with open(r'D:\OPP-115_v1_0\dp\vocab_dir\words.txt', 'r') as word_file:
        for filename in os.listdir(directory):
            with open(os.path.join(directory, filename)) as file:
                for text in file:
                    a_list.append(text)
                for string in word_file:
                    vocab = ast.literal_eval(string)
                for i,sen in enumerate(a_list):
                    pro = process_str(sen)
                    for word in pro:
                        if word not in vocab: 
                            vocab[word] = len(vocab)
                output(a_list)
        out2(vocab)
        
if __name__ == '__main__':
    main()