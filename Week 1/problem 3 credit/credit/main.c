#include <cs50.h>
#include <stdio.h>

int main(void)
{
    long number = get_long("Number: ");

    int sum_even = 0, sum_odd = 0, length = 0;
    int first_digit = 0, first_two_digits = 0;

    long temp = number;

    while (temp > 0)
    {
        int digit = temp % 10;

        if (length % 2 == 0)
        {
            sum_even += digit;
        }
        else
        {
            int doubled = digit * 2;
            sum_odd += (doubled / 10) + (doubled % 10);
        }

        temp /= 10;
        length++;

        if (temp < 100 && temp >= 10)
        {
            first_two_digits = temp;
        }

        if (temp < 10 && temp > 0)
        {
            first_digit = temp;
        }
    }

    bool valid = (sum_even + sum_odd) % 10 == 0;

    if (valid)
    {
        if ((first_two_digits == 34 || first_two_digits == 37) && length == 15)
        {
            printf("AMEX\n");
        }
        else if (first_digit == 4 && (length == 13 || length == 16))
        {
            printf("VISA\n");
        }
        else if (first_two_digits >= 51 && first_two_digits <= 55 && length == 16)
        {
            printf("MASTERCARD\n");
        }
        else
        {
            printf("INVALID\n");
        }
    }
    else
    {
        printf("INVALID\n");
    }
}
