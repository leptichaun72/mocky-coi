def game():
    num = 42
    guess = input("im thinking of a number.\
try to guess it: ")
    while(guess != num):
        guess = int(guess)    
        if(guess < num):
            print('too low')
        else:
            print('too high')
        guess = input("try guess again?")
    choice=input("Want to play again (y/n)")
    if(choice == "yes"):
        game()
    else:
        print('thank you for playing')

game()