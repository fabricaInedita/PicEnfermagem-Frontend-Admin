using namespace std;
#include <iostream>
#include <vector>

int main() {
    vector<int> vec = [1,56,156,56,1,56156,1,11,1,1];
    int pares = 0;
    int impares = 0;
    int n = vec.size();
    for (int num : vec) {
        if (num % 2 == 0) {
            pares++;
        } else {
            impares++;
        }
    }
    std::cout << "Números pares: " << pares;
    std::cout << "Números ímpares: " << impares;
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (vec[j] > vec[j + 1]) {
                int temp = vec[j];
                vec[j] = vec[j + 1];
                vec[j + 1] = temp;
            }
        }
    }
    for (int num : vec) {
        std::cout << "Números pares ordenados: " << pares;
        std::cout << num << " ";
    }
}


#include <iostream>
